#!/bin/bash
clear
echo "Please Input Your Year:"
read -p "Year: " year

if [ -z "$year" ]; then
    echo "Invalid Choice."
    exit
fi

echo "Please Input Your Month:"
read -p "Month: " month

if [ -z "$month" ]; then
    echo "Invalid Choice."
    exit
fi

echo "Please Input Your Day:"
read -p "Day: " day

if [ -z "$day" ]; then
    echo "Invalid Choice."
    exit
fi

echo "Please Input Your Title:"
read -p "Title: " title

if [ -z "$title" ]; then
    echo "Invalid Choice."
    exit
fi

echo "Please Input Your Slug:"
read -p "Slug: " slug

if [ -z "$slug" ]; then
    echo "Invalid Choice."
    exit
fi

echo "Please Input Your Cover Image:"
read -p "Cover Image: " cover

echo "Please Input Your Description:"
read -p "Description: " description

echo "Please Input Your Tags:"
read -p "Tags: " tags


cd "${year}/"

mkdir "${year}-${month}-${day}-${slug}"

touch "${year}-${month}-${day}-${slug}/index.mdx"
cat << EOF > "${year}-${month}-${day}-${slug}/index.mdx"
---
title: "${title}"
date: "${year}-${month}-${day}"
description: "$description"
coverimage: ${cover}
tags: ${tags}
published: true
---
EOF

sed -i 's/https:\/\/evilsaint\.com.*cover_image\///g' "${year}-${month}-${day}-${slug}/index.mdx"

cd "${year}-${month}-${day}-${slug}"
if [ ! -z ${cover} ]; then
    wget ${cover}
fi

code index.mdx & disown

read -p "Have you put conten in place? " yes

if [ ! -z $yes ]; then
~/my-online-portfolio/src/tutorials/pic.sh index.mdx
fi
