this.setState({  
      ...this.state,
      cars: [
        ...this.state.cars.slice(0, index),
        {
          ...this.state.cars[index],
          number: this.state.cars[index].number - 1,
        },
        ...this.state.cars.slice(index + 1),
      ],
    });