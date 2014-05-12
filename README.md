# Echonest Artists
By [Lior Elrom](http://liormb.com/).

####<http://echonest-artists.herokuapp.com/>

- - -

### Echonest Artists is a visual application that represent the top 100 most hottest artists in the music industry by different score and color.

## Background
The Echonest Artists application is a single-page application (SPA) that uses [Echo Nest API](http://the.echonest.com/) to represent top 100 most hottest artists. The Echo Nest API is a very powerful platform that synthesizes more than 2.7 million known artists and returning, between other things, the artist's hottness, familiarity and discovery rate set by different criterias.
####
Every artist in that list is having its own block that contain its name, location, a link to its official website and to its LastFM page where you can find lots of photos, videos and biography and listen to there songs.
####
Every block also contains 2 special numbers in two different corners: hottness rank (top-left) and an overall score (top-right) that is a combanation of the hottness rank, familiarity rank and discovery rank.

##  The Different Charts

The application provids 4 different charts of data about the top 100 hottest artists:

### 1. Hottest Artists
Top 100 hottest artists organized by its hottness and colored accordingly. As an artist more hot, its color is darker and its transperaty is less and vise versa.
For example, Katty Perry rank as hotter than Pitbull and as a result her block is darker and less transperant than Pitbull.

![Echonest-Artists](/app/assets/images/screenshots/hottest-artists.png "Hottest Artists")

### 2. Rising Artists
This chart represent a list of artists that rising most quickly to the top of the hottest artists in the last days.
For example, Indila is picking more listeners latly than Klingande.

![Echonest-Artists](/app/assets/images/screenshots/rising-artists.png "Rising Artists")

### 3. Most Familiar Artists
This filter represent, as its name, the most familiar artist out of all stored artists in Echo Nest database.

![Echonest-Artists](/app/assets/images/screenshots/familiar-artists.png "Familiar Artists")

### 4. Overall Score

![Echonest-Artists](/app/assets/images/screenshots/overall-score.png "Overall Score")

###
## Technologies

* Ruby on Rails 4
* PostgreSQL
* Heroku Task Scheduler
* AngularJS
* jQuery
* Echo Nest API
* HTML5/CSS3
* Bootstrap

## Thanks & Inspiration
The Echonest Artists application is based on the amazing work of [Patrick Morgan](https://github.com/patrickmmorgan) who came up with that idea and did a great job putting it all together in his [application](https://github.com/patrickmmorgan/periodic_table_of_echonest).
