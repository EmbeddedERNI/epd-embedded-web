lynx -dump $1  | sed -n "s/^......file:..\(.*\).html.*/http:\/\/www.freertos.org\1.html/p" | sort -u | xargs wget 
