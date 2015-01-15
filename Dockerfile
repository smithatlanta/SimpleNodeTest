FROM nodesource/node:trusty

RUN \
    apt-get install -y --force-yes git && \
    mkdir ~/projects && \
    cd ~/projects && \
    git clone https://github.com/smithatlanta/SimpleNodeTest.git && \
    cd ~/projects/SimpleNodeTest && \
    npm install

EXPOSE 3000

CMD ["bash", "-c", "/usr/bin/node ~/projects/SimpleNodeTest/index.js"]