# frozen_string_literal: true

class Api::Oxygen::Admin::CylindersController < Api::V1::BaseController
  skip_before_action :authenticate_user_using_x_auth_token!
  before_action :authenticate_admin_user_using_x_auth_token!
  before_action :find_vendor

  def add
    cylinders = @vendor.add_cylinders!(params[:cylinders])
    render json: cylinders
  end

  def create
    cylinder = @vendor.cylinders.new(cylinder_params)

    if cylinder.save
      render json: cylinder
    else
      render json: { errors: cylinder.errors }
    end
  end

  def update
    cylinder = Oxygen::Cylinder.find(params[:id])

    if cylinder.update cylinder_params
      render json: cylinder
    else
      render json: { errors: cylinder.errors }
    end
  end

  def destroy
    cylinder = Oxygen::Cylinder.find(params[:id])

    if cylinder.destroy
      render json: cylinder
    else
      render json: { errors: cylinder.errors }
    end
  end

  def index
    render json: @vendor.cylinders.order("updated_at desc")
  end

  def show
    @cylinder = Oxygen::Cylinder.find(params[:id])
    render json: {
      cylinder: @cylinder,
      history: @cylinder.locations.order("created_at desc").map do |location|
        {
          station: location.station,
          status: location.status,
          entry_exit: location.entry_exit,
          capacity: location.capacity
        }
      end
    }
  end

  private
    def find_vendor
      @vendor = Oxygen::Vendor.find(params[:vendor_id])
    end

    def cylinder_params
      params.require(:cylinder).permit(:capacity, :status, :category, :serial_number)
    end

    def cylinder_bulk_add_params
      params.require(:cylinder).permit(:capacity, :status, :category)
    end
end