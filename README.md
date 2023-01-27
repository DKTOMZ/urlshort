# DT url_shortener service
This is a simple url shortener service that makes use of nodejs and frontend (html,css).
It takes in a url(preferably long) and shortens it and returns the shortened url.
The short url will still point to the old one.


# Web interface
The web interface is available via https://url-short-uudq.onrender.com/

# API
It has a public free api that is usable via the following format:

Make a post request to https://"url-short-uudq.onrender.com/api/shorten/"
using application/x-www-form-urlencoded (url=yoururl) or application/json ({"url":"yoururl"}) content type 

Responses will be in json format with the following keys:
original_url - url you provided
short_url - shortened url

Incase of error, error will be returned:
error - error

# Summary
This was a fun, practical and applicable project that helped me learn more about nodejs, express
and the dependencies. 
