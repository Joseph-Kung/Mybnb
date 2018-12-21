class Api::ReviewsController < ApplicationController


  private

  def review_params
    params.require(:review).permit(:body, :num_stars, :listing_id, :user_id)
  end
end