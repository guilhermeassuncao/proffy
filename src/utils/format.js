const subjects = [
    'Artes',
    'Biologia',
    'Ciências',
    'Educação Física',
    'Física',
    'Geografia',
    'História',
    'Português',
    'Química'
]

const weekdays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado'
]

function getSubject(subjectNumber) {
    const position = subjectNumber - 1;
    return subjects[position]
}

function convertHoursTominutes(time) {
    const [hours, minutes] = time.split(':');
    return Number((hours * 60) + minutes);
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursTominutes
}