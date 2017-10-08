#!/bin/bash

if [ -f $FILE ]; then
  f=$1
  t=`mktemp $f.XXXXX`

  echo $f
  echo $t

 tidy -ashtml $f | hxnormalize -xed | hxremove td#td_right_side_bar | hxremove td#id_tree_menu_column | hxremove div#banner_div | hxremove div#Email_icon | hxremove div#Twitter_icon | hxremove div#RSS_icon | hxremove a.blue_menu | hxremove div#logo_links >$t
  mv $t $f
  chmod 644 $f
else
  echo File $1 not found
fi

