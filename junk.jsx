{/* for bulk list */}
{
    list ?
      list.map(
        (item) => (item.name ? <ListItem isOwned={item.isDone} ownNo={0} handleOpen={handleOpen}
          key={`${item.name}`} itemName={item.name} url={item.url}></ListItem> : null)) : null
  }
  {/* for detailed list */}
  {
    currentItem ? 
    <DetailedItem isOwned={currentItem.isDone} ownNo={0} handleOpen={handleOpen}
    key={`${currentItem.name}`} item={currentItem.name}></DetailedItem>
  }