class ArtistsController < ApplicationController
	respond_to :html, :json

	def index
		@artists = Artist.all
		respond_with @artists
	end
	
end