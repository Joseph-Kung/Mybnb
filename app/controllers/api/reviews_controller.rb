class Api::ReviewsController < ApplicationController
  def index
    @reviews = Listing.find(:listing_id).reviews

    render :index
  end

  def create
    @review = Review.new(review_params)
    
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 400
    end
  end

  def destory
    @review = Review.find(params[:id])
    @review.destory

    render :show
  end

  private

  def review_params
    params.require(:review).permit(:body, :num_stars, :listing_id, :user_id)
  end
end