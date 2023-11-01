import random
import copy
class Hat:

    def __init__(self, **balls):
        entries = balls.items()
        ballList = []
        for k, v in entries:
            for i in range(v):
                ballList.append(k)
        self.contents = ballList

    def __str__(self):
        return str(self.contents)
        # return '\n'.join(f'{key}: {value}' for key, value in self.balls.items())
        

    def draw(self, cuantity):
        resultList = []
        if cuantity <= len(self.contents):
            for x in range(cuantity):
                index = random.randrange(0,len(self.contents))
                resultList.append(self.contents.pop(index))
            return resultList
        else:
            return self.contents
        
def experiment(hat, expected_balls, num_balls_drawn,num_experiments):
    
    entries = Hat(**expected_balls).contents
    M = 0
    for n in range(num_experiments):
        newHat = copy.deepcopy(hat)
        if len(newHat.contents) < num_balls_drawn:
            return 1
        draw = newHat.draw(num_balls_drawn)
        for e in entries:
            if e in draw:
                draw.remove(e)
        if len(draw) == (num_balls_drawn - len(entries)):
            M+=1
    # print(M)
    # print(num_experiments)
    return (M/num_experiments)

# hat = Hat(black=6, red=4, green=3)
# probability = experiment(hat=hat,
#                   expected_balls={"red":2,"green":1},
#                   num_balls_drawn=5,
#                   num_experiments=2000)
# print(probability)
# print(hat)


# hat1 = Hat(yellow=3, blue=2, green=6)
# print(hat1)
# print(hat1.draw(5))


hat2 = Hat(blue=3,red=2,green=6)
probability = experiment(hat=hat2, expected_balls={"blue":2,"green":1}, num_balls_drawn=4, num_experiments=1000)
actual = probability
expected = 0.272
print(f"Actual: {actual:.2f}")
print(f"Expected: {expected:.2f}")

hat3 = Hat(yellow=5,red=1,green=3,blue=9,test=1)
probability = experiment(hat=hat3, expected_balls={"yellow":2,"blue":3,"test":1}, num_balls_drawn=20, num_experiments=100)
actual = probability
expected = 1.0
print(f"Actual: {actual:.2f}")
print(f"Expected: {expected:.2f}")

