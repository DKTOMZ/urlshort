# DT url_shortener service
This is a simple url shortener service that makes use of nodejs and frontend (html,css).
It takes in a url(preferably long) and shortens it and returns the shortened url.
The short url will still point to the old one.

It has a public api that is usable via the following format:

"https://urlshort-tjf7.onrender.com/urlshort/api/shorten/?url=youractualurl"

Responses will be in json format with the following keys:
original_url - url you provided
short_url - shortened url
error - error

This was a fun, practical and applicable project that helped me learn more about nodejs, express
and the dependencies. 