#!/bin/sh

# Prepare empty output directory
mkdir -p out
rm -rf out/*

# Build documents with asciidoctor
asciidoctor -o out/index.html src/index.adoc
asciidoctor-pdf -o out/software-project-setup-guide.pdf src/index.adoc

# Copy assets missed by build but needed by documents
cp src/favicon.png out/