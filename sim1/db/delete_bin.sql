update shelves
set name = null, price = 0
where shelf_id = $1 and bin_id = $2;