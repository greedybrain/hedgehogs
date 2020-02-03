class ForecastsController < ApplicationController

    # state route
    get '/forecasts' do
        # Three things controller actions can do:
        ## 1. get and post data from/to the db through the model 
        @forecasts = Forecast.all
        ## 2. display this data in a view (usually happens in a get request)
        erb :'/forecasts/index'
        ## 3. redirect to another controller action (usually happens in a post request)
        # redirect '/home'
    end

    # dynamic route - what is rendered will change based on user behavior/input
    get '/forecasts/:id' do
        # use binding.pry!
        # params => {"id" => whatever the user entered into the url after /forecasts/}
        @forecast = Forecast.find(params["id"])
        erb :'/forecasts/show'
    end

end

## Three different events:
# a user clicking a link - <a href="/forecasts/3"</a>
# a controller action redirecting
# a controller action rendering a view