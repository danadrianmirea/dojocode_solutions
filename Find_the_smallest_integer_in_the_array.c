#include <stddef.h>
#include "main.h"

int findSmallestInt(const int vec[], size_t len) {

  int min = vec[0];
  for(int i=1; i<(int)len; i++)
  {
    if(vec[i]<min) 
    {
      min = vec[i];
    }
  }

  return min;
}