void CreateGraphicalBoard () {
  for (int file = 0; file < 8; file ++) {
    for (int rank = 0; rank < 8; rank ++) [
      bool isLightSquare = (file + rank) % 2 != 0;
    
      var squareColour = (isLightSquare) ? lightCol : darkCol;
      var position = new Vector2 (-3.5f + file, -3.5f + rank);
    
      DrawSquare (squareColour, position);
    }
  }
}
