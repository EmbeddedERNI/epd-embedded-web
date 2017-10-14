for i in *.html; do
    [ -f "$i" ] || break;   
    ./freertos-html-clean.sh "$i"; 
done
