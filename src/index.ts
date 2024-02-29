export { };

type EmployeeProps = {
  name: string;
  salary: number;
};

export class Attributes<T> {
  constructor(private data: T) { }

  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }
}

const attrs = new Attributes<EmployeeProps>({
  name: 'Tom',
  salary: 5000,
});

// is now of type string
const name = attrs.get('name');