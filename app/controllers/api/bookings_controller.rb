class Api::BookingsController < ApplicationController
  def index
    if params[:listing_id]
      @bookings = Listing.find(params[:listing_id]).bookings
    else
      @bookings = User.find(params[:id]).bookings
    end

    render :index
  end

  def create
    @booking = Booking.new(booking_params)

    if @booking.save && @booking.valid_dates?
      render :show
    else
      render @booking.errors.full_messages.concat(["Your requested dates overlap with another booking"]), status: 400
    end
  end

  def update
    @booking = Booking.find(params[:id])

    if @booking.update(booking_params)
      render :show
    else
      render @booking.errors.full_messages, status: 400
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
    render :show
  end

  private

  def booking_params
    params.require(:booking).permit(:listing_id, :renter_id, :start_date, :end_date, :num_guests)
  end
end