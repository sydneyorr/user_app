# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# enable_extension "plpgsql"

# create_table "users", force: :cascade do |t|
#   t.string "name"
#   t.integer "age"
#   t.datetime "created_at", precision: 6, null: false
#   t.datetime "updated_at", precision: 6, null: false
# end

# end


require "faker"

50.times do
c1 = User.create(name: Faker::Name.name, age: rand(10...100))

puts c1
end
