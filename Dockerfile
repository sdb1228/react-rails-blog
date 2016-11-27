FROM ruby:2.2.6-onbuild

RUN curl -sL https://deb.nodesource.com/setup_5.x | bash - && \
    apt-get install -y \
        nodejs \
        postgresql-client && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN apt-get update -qq && apt-get install -y build-essential && apt-get install -y libpq-dev && apt-get install -y libxml2-dev libxslt1-dev && apt-get install -y libqt4-webkit libqt4-dev xvfb && apt-get install -y nodejs

ENV APP_HOME /myapp
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

ADD Gemfile* $APP_HOME/
RUN bundle install

# npm stuff
ADD package.json ./
RUN npm set progress=false && \
    npm install && \
    npm cache clean

ADD . $APP_HOME
