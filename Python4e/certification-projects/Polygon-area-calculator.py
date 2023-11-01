class Rectangle:

    def __init__(self,width= 5,height = 10):
        self.width= width
        self.height= height

    def __str__(self):
        return "Rectangle(width=" + str(self.width) + ", height=" + str(self.height)+ ")"
    
    def set_width(self,width):
        self.width = width
        
    def set_height(self,height):
        self.height = height

    # Returns area (width * height)
    def get_area(self): 
        return self.height * self.width
        
    # Returns perimeter (2 * width + 2 * height)
    def get_perimeter(self): 
        return 2 * self.height + 2 * self.width
    
    # Returns diagonal ((width ** 2 + height ** 2) ** .5)
    def get_diagonal(self):
        return ((self.width ** 2 + self.height ** 2) ** .5)
    
    # Returns a string that represents the shape using lines of "*". The number of lines should be equal to the height and the number of "*" in each line should be equal to the width. There should be a new line (\n) at the end of each line. If the width or height is larger than 50, this should return the string: "Too big for picture.".
    def get_picture(self):
        string=""
        if self.width > 50 or self.height > 50:
            string="Too big for picture."
        else:
            for x in range(self.height):
                string+= "*" * self.width + "\n"
        return string
            
    def get_amount_inside(self,shape):
        count = 0
        height = self.height
        while height >= shape.height:
            length = self.width
            while length >= shape.width:
                count+=1
                length-= shape.width
            height-=shape.height
        return count

class Square(Rectangle):
    
    def __init__(self, width=5):
        super().__init__(width, width)

    def __str__(self):
        return "Square(side=" + str(self.width) + ")"
    

    def set_side(self, side):
        super().set_height(side)
        super().set_width(side)

    def set_width(self,width):
        self.width = width
        self.height = width
        
    def set_height(self,height):
        self.height = height
        self.width = height



rect = Rectangle(10, 5)
print(rect.get_area())
rect.set_height(3)
print(rect.get_perimeter())
print(rect)
print(rect.get_picture())

sq = Square(9)
print(sq.get_area())
sq.set_side(4)
print(sq.get_diagonal())
print(sq)
print(sq.get_picture())

rect.set_height(8)
rect.set_width(16)
print(rect.get_picture())
print(sq.get_picture())

print(rect.get_amount_inside(sq))



