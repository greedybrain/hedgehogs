class ForecastsController < ApplicationController

    def index
        # this is implicitly rendering the views/forecasts/index.erb view
        # render :index => if we used this code, it would explicitly render the same view
    end

end