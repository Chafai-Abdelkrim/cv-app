import { faker } from '@faker-js/faker';
import uniqid from 'uniqid';

function generateData() {
  const data = {
    info: {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      professionalTitle: 'Software Engineer',
      profile: faker.lorem.paragraphs(2),
    },
    contact: {
      location: faker.address.city(),
      phone: faker.phone.number('+212 ##-###-##-##'),
      website: faker.internet.domainName(),
      email: faker.internet.email(),
    },
    education: [
      {
        degree: 'Master of CS',
        university: 'Massachusetts Institute of Technology',
        from: '2018',
        to: '2021',
      },
      {
        degree: 'Bachelor of CS',
        university: 'Massachusetts Institute of Technology',
        from: '2014',
        to: '2018',
      },
    ],
    work: [
      {
        title: 'Software Engineer',
        company: 'Google',
        from: '2020',
        to: 'Present',
        description: faker.lorem.paragraphs(1),
      },
      {
        title: 'Full Stack Developer',
        company: 'Microsoft',
        from: '2018',
        to: '2020',
        description: faker.lorem.paragraphs(1),
      },
    ],
    skills: [
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'PHP' },
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'SQL' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'C#' },
    ],
  };

  [...data.education, ...data.work, ...data.skills].forEach(
    (item) => (item.key = uniqid())
  );

  return data;
}

export default generateData;
