class Api::ListingsController < ApplicationController
  def create
    @listing = Listing.new(listing_params)
    @listing.owner_id = current_user.id

    if @listing.save
      render :show
    else
      render json: @listing.errors.full_messages
    end
  end

  def show
    @listing = Listing.find(params[:id])
    render :show
  end

  def index
    @listings = Listing.all
    render :index
  end

  def destroy
    @listing = Listing.find(params[:id])
    @listing.delete
    render :show
  end

  private

  def listing_params
    params.require(:listing).permit(
      :title, :city, :state, :zip_code, :latitude, :longitude, :num_rooms, :num_bathrooms, :address,
      :price, :description, :private_room, :house, :washer, :dryer, :parking, :tv, :wifi, :air_con, :kitchen
    )
  end
end