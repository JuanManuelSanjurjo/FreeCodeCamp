import numpy as np


def calculate(list):

    if len(list) < 9:
        raise  ValueError("List must contain nine numbers.")

    matrix = np.array([list[:3],list[3:6],list[6:9]])
    means = [matrix.mean(axis=0).tolist(), matrix.mean( axis=1).tolist(), matrix.mean().tolist()]
    variances =[matrix.var(axis=0).tolist(), matrix.var( axis=1).tolist(), matrix.var().tolist()]
    stdDeviations =[matrix.std(axis=0).tolist(), matrix.std( axis=1).tolist(), matrix.std().tolist()]
    maxs =[matrix.max(axis=0).tolist(), matrix.max( axis=1).tolist(), matrix.max().tolist()]
    mins =[matrix.min(axis=0).tolist(), matrix.min( axis=1).tolist(), matrix.min().tolist()]
    sums =[matrix.sum(axis=0).tolist(), matrix.sum( axis=1).tolist(), matrix.sum().tolist()]

    calculation = {
    'mean':means,
    'variance': variances,
    'standard deviation': stdDeviations,
    'max':maxs,
    'min': mins,
    'sum': sums
    } 

    return calculation








print(calculate([0,1,2,3,4,5,6,7,8]))