package com.farouk.bengharssallah.react.backend.security;

import io.jsonwebtoken.ExpiredJwtException;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JWTAuthorizationFiler extends BasicAuthenticationFilter {
	
	private JwtTokenUtil jwtTokenUtil;
    private JwtUserDetailsService jwtUserDetailsService;
	
	public JWTAuthorizationFiler(AuthenticationManager authManager, JwtTokenUtil jwtTokenUtil, JwtUserDetailsService jwtUserDetailsService) {
        super(authManager);
        this.jwtTokenUtil = jwtTokenUtil;
        this.jwtUserDetailsService = jwtUserDetailsService;
	}
     
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {

        response.addHeader("Access-Control-Allow-Origin", "*");
        response.addHeader("Access-Control-Allow-Headers", "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,authorization");
        response.addHeader("Access-Control-Expose-Headers", "Access-Control-Allow-Origin, Access-Control-Allow-Credentials, authorization");
        if(request.getMethod().equals("OPTIONS")){
            response.setStatus(HttpServletResponse.SC_OK);
        }
        else if(request.getRequestURI().startsWith("/authenticate")) {
            filterChain.doFilter(request, response);
            return;
        }
        else if(request.getRequestURI().startsWith("/register")) {
            filterChain.doFilter(request, response);
            return;
        }
        else {
        	final String requestTokenHeader = request.getHeader(jwtTokenUtil.JWT_HEADER_NAME);
    		System.out.println(request.getHeaderNames().toString());
    		String username = null;
    		String jwtToken = null;
    		if (requestTokenHeader != null && requestTokenHeader.startsWith(jwtTokenUtil.HEADER_PREFIX)) {
    			jwtToken = requestTokenHeader.substring(7);
    			try {
    				username = jwtTokenUtil.getUsernameFromToken(jwtToken);
    			} catch (IllegalArgumentException e) {
    				System.out.println("Unable to get JWT Token");
    			} catch (ExpiredJwtException e) {
    				System.out.println("JWT Token has expired");
    			}
    		} else {
    			logger.warn("JWT Token does not begin with Bearer String");
    		}

    		if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
    			UserDetails userDetails = this.jwtUserDetailsService.loadUserByUsername(username);
    			if (jwtTokenUtil.validateToken(jwtToken, userDetails)) {
    				UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
    						userDetails, null, userDetails.getAuthorities());
    				usernamePasswordAuthenticationToken
    						.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
    				SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
    			}
            filterChain.doFilter(request, response);
           }
       }
    }
}