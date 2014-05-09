class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.string :name
      t.string :echonest_artist_id
      t.text :biographies, :array => true
      t.float :discovery
      t.integer :discovery_rank
      t.float :familiarity
      t.integer :familiarity_rank
      t.text :genres, :array => true
      t.float :hotttnesss
      t.integer :hotttnesss_rank
      t.text :images, :array => true
      t.string :location
      t.text :official_url
      t.text :lastfm_url
      t.integer :years_active
      t.integer :score

      t.timestamps
    end
  end
end
