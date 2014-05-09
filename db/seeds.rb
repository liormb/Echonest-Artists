# ===============================================
# Creates echo nest's initial artists information
# ===============================================

Artist.delete_all

api_key       = ENV['ECHONEST_API_KEY']
consumer_key  = ENV['ECHONEST_CONSUMER_KEY']
shared_secret = ENV['ECHONEST_SHARED_SECRET']

results = 78
buckets = [
	"biographies",
	"discovery",
	"discovery_rank",
	"familiarity",
	"familiarity_rank",
	"hotttnesss",
	"hotttnesss_rank",
	"artist_location",
	"urls",
]

top_hottt_query = "http://developer.echonest.com/api/v4/artist/top_hottt?api_key=#{api_key}&format=json&results=#{results}"
buckets.each { |bucket| top_hottt_query += "&bucket=#{bucket}" }

top_hottt = HTTParty.get(top_hottt_query)
artists = top_hottt["response"]["artists"]

artists.each do |artist|
	data = {
		name:               artist["name"],
		echonest_artist_id: artist["id"],
		discovery:         (artist["discovery"]*100).round(4),
		discovery_rank:     artist["discovery_rank"],
		familiarity:       (artist["familiarity"]*100).round(4),
		familiarity_rank:   artist["familiarity_rank"],
		hotttnesss:        (artist["hotttnesss"]*100).round(4),
		hotttnesss_rank:    artist["hotttnesss_rank"],
		location:           artist["artist_location"]["location"],
		official_url:       artist["urls"]["official_url"],
		lastfm_url:         artist["urls"]["lastfm_url"],
		score:            ((artist["hotttnesss_rank"] + artist["familiarity_rank"] + artist["discovery_rank"])/3).round()
	}
	Artist.create(data)
end