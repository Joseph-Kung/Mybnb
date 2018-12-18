class Api::ListingsController < ApplicationController
  def create
    @listing = Listing.new(listing_params)

    if @listing.save
      render :show
    else
      render json: @listing.errors.full_messages, status: 400
    end
  end

  def show
    @listing = Listing.with_attached_photos.find(params[:id])

    if @listing
      render :show
    else
      render json: ['Listing does not exist'], status: 400
    end
  end

  def index
    if params[:bounds]
      @listings = Listing.all.select {|listing| listing.in_bounds(params[:bounds])}
      render :index
    else 
      @listings = Listing.with_attached_photos.all
      render :index
    end
  end

  def destroy
    @listing = Listing.find(params[:id])
    if @listing.delete
      render :show
    else
      render json: ['Something went wrong'], status: 400
    end
  end

  private

  def listing_params
    params.require(:listing).permit(
      :title, :city, :state, :zip_code, :latitude, :longitude, :num_rooms, :num_bathrooms, :address,
      :price, :description, :private_room, :house, :washer, :dryer, :parking, :tv, :wifi, :air_con, :kitchen, :owner_id
    )
  end
end