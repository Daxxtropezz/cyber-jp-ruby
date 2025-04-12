require 'sprockets'
require 'sprockets-helpers'

module CyberJP
  class App < Sinatra::Base
    configure do
      set :sprockets, Sprockets::Environment.new(root)
      set :assets_prefix, '/assets'
      set :digest_assets, production?
      
      # Configure Sprockets
      sprockets.append_path File.join(root, 'public/src/js')
      sprockets.append_path File.join(root, 'public/src/scss')
      sprockets.js_compressor  = :uglify
      sprockets.css_compressor = :scss
      
      Sprockets::Helpers.configure do |config|
        config.environment = sprockets
        config.prefix = assets_prefix
        config.digest = digest_assets
      end
    end
  end
end