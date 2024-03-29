# frozen_string_literal: true

source "https://rubygems.org"

ruby "2.7.1"

gem "rails"
gem "sprockets", "~> 3.7.2"

# friends of Rails
gem "jquery-rails"
gem "sprockets-rails"
gem "sass-rails", ">= 5.0.3"
gem "uglifier", ">= 2.7.1"

gem "webpacker", "~> 4.0"

# database
gem "pg"

# JSON builder
gem "jbuilder", ">= 2.2.13"

# Authentication
gem "devise", "~> 4.7"

# Error tracking
gem "honeybadger", "~> 4.7"

# Bootstrap framework
gem "bootstrap", "~> 4.4.1"

# Fonts
gem "font-awesome-sass", "~> 4.3.0"

# Support cross-browser css compatibilty
gem "autoprefixer-rails"

# Forms made easy for rails
gem "simple_form", "~>5.0"

gem "coffee-script"

# Email validation
gem "email_validator"

# Templating engine
gem "slim"
gem "slim-rails"

# Intercepts outgoing emails in non-production environment
gem "mail_interceptor", group: [:development, :staging]

# Adds prefix to subject in emails
gem "email_prefixer"

# Application server
gem "puma", "~> 4.3.6"

# Rails request timeout, needed if running on Heroku-
# https://devcenter.heroku.com/articles/request-timeout

# Display notifications
gem "jquery-growl-rails"

# Faster env load times
gem "bootsnap"

# Background jobs
gem "delayed_job_active_record"

# To generate QR Code
gem "rqrcode"

# To load enviroment variables from .env
gem "dotenv-rails"
# To run cron jobs
gem "whenever", require: false

# Import/Export CSV to/from database
gem "postgres-copy"

gem "mimemagic"

group :development do
  # speeds up development by keeping your application running in the background
  gem "spring"

  # A runtime developer console and IRB alternative with powerful introspection capabilities
  gem "pry"

  # For better debugging
  gem "byebug"

  # pry bindings to byebug
  gem "pry-byebug"

  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem "web-console", "~> 4.0"

  # Reenable after https://github.com/rails/rails/issues/26158 is fixed
  gem "listen", "~> 3.2"

  # reports N+1 queries
  gem "bullet"

  # A Ruby static code analyzer, based on the community Ruby style guide
  gem "rubocop", require: false

  # A RuboCop extension focused on enforcing Rails best practices and coding conventions.
  gem "rubocop-rails", require: false

  # Patch-level verification for Bundler.
  gem "bundler-audit", require: false

  # vulnerabity checker for Ruby itself.
  gem "ruby_audit", require: false
end

group :test do
  # Complete suite of testing facilities
  gem "minitest", "5.10.3"

  # for test coverage report
  gem "simplecov", require: false

  # Minitest reporter plugin for CircleCI.
  gem "minitest-ci"

  # generate test data
  gem "factory_bot_rails"

  gem "faker"
end

# To inject React components in views and pass props from server
gem "react-rails", "~> 2.6"
