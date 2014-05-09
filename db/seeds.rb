# ===============================================
# Creates echo nest's initial artists information
# ===============================================

api_key       = ENV['ECHONEST_API_KEY']
consumer_key  = ENV['ECHONEST_CONSUMER_KEY']
shared_secret = ENV['ECHONEST_SHARED_SECRET']

results = 100
buckets = [
	"biographies",
	"discovery",
	"discovery_rank",
	"familiarity",
	"familiarity_rank",
	"genre",
	"hotttnesss",
	"hotttnesss_rank",
	"images",
	"artist_location",
	"urls",
	"years_active"
]
# http://developer.echonest.com/api/v4/artist/top_hottt?api_key=ECIOQFY1FBB5I2X4P&format=json&results=1&bucket=biographies
top_hottt_query = "http://developer.echonest.com/api/v4/artist/top_hottt?api_key=#{api_key}&format=json&results=#{results}"
buckets.each { |bucket| top_hottt_query += "&bucket=#{bucket}" }

top_hottt = HTTParty.get(top_hottt_query)
artists = top_hottt["response"]["artists"]

top_hottt.each do |record|
	artist = {
		name:               record["name"],
		echonest_artist_id: record["id"],
		biographies:        record["biographies"],
		discovery:         (record["discovery"]*100).round(4),
		discovery_rank:     record["discovery_rank"],
		familiarity:       (record["familiarity"]*100).round(4),
		familiarity_rank:   record["familiarity_rank"],
		genres:             record["genres"],
		hotttnesss:        (record["hotttnesss"]*100).round(4),
		hotttnesss_rank:    record["hotttnesss_rank"],
		images:             record["images"],
		location:           record["artist_location"]["location"],
		official_url:       record["urls"]["official_url"],
		lastfm_url:         record["urls"]["lastfm_url"],
		years_active:       record["years_active"][0]["start"],
		score:            ((record["hotttnesss_rank"] + record["familiarity_rank"] + record["discovery_rank"])/3).round()
	}
	Artist.create(artist)
end