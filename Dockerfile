# this generates a minimalistic docker image. Note that 404 is not supported
FROM lipanski/docker-static-website:latest

COPY dist .

CMD ["/thttpd", "-D", "-h", "0.0.0.0", "-p", "3000", "-d", "/home/static", "-u", "static", "-l", "-", "-M", "60"]
