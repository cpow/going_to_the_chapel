class WeddingExperienceController < ApplicationController
  def show
    @ceremony = Dir.glob("app/assets/images/ceremony/*")
    @party = Dir.glob("app/assets/images/party/*")
    @getting_ready = Dir.glob("app/assets/images/getting-ready-photos/*")
    @captains_cove = Dir.glob("app/assets/images/captains-cove/*")
  end

  def gallery
  end
end
