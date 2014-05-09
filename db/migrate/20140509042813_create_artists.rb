class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.string :name
      t.string :echonest_artist_id
      t.float :discovery
      t.integer :discovery_rank
      t.float :familiarity
      t.integer :familiarity_rank
      t.float :hotttnesss
      t.integer :hotttnesss_rank
      t.string :location
      t.text :official_url
      t.text :lastfm_url
      t.integer :score

      t.timestamps
    end
  end
end
