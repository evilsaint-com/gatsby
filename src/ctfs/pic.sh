#!/bin/bash

file=$1

if [ ! -z $file ]; then
	echo "inside non zero file schenario"

	cd $(dirname $file)

	for i in $(grep -o '/media/markdown/.*.png' $file); do
		wget "https://evilsaint.com/$i"; 
	done

	sed -i 's@/media/markdown/..../../../@@g' $file
fi
