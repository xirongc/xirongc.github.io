---
layout: "../../layouts/BlogLayout.astro"
title: Upload Paper to arXiv
date: 2023-10-31
author: Xirong Cao
image: {
  src: "/images/post-4/arxiv.jpg",
  alt: "Notes",}
abstract: Uploading paper file to arXiv takes some times and steps, this post is a note about how to upload paper to arXiv from overleaf steps by steps. 
category: Notes
belongs: {
    type: "Notes",
    conference: "",}
---
### 1) Download Zipped File 
*click the Menu at the top right, and download the source file*
<br><br>

### 2) Download bbl file
*click the logs and output files, then download output.ddl*
<img src="/images/post-4/arxiv-1.png">
<br><br>

### 3) Login to Arxiv: start new submission / update / replace / etc
*- only .tex .bbl and all images needed to be zipped and uploaded*
<br>
*- keep the same name, e.g. output.tex, output.bbl*
<br>
*- in case your images stored in a directory while writing in overleaf*
<br>
*- remove all the name of "figure" directory for all image path in the .tex file, because they are now on the same path*
<br>
*- at the bottom, add \bibliography{output.bbl} for reference files*
<img src="/images/post-4/arxiv-2.png">
<br><br>

### 4) Special string is not allowed 
*e.g. greek letter in image file name*
