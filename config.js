/* Dra. Maria Luiza Gutmacher — Dados de contato fictícios para demonstração. */
const CLINIC = {
  instagram: 'https://www.instagram.com/dra.exemplo/',
  handle: '@dra.exemplo',
  images: {logo:'assets/maria-retrato.webp', clinic:'assets/maria-retrato.webp', reception:'assets/maria-consultorio.webp'}
};
const WHATSAPP = '5561999990000';
const PHONE_LABEL = '(61) 99999-0000';
const ADDRESS = 'Edifício Prime Business Center, Sala 501 · Asa Sul · Brasília, DF';
const MAPS_URL = 'https://maps.google.com/?q=Brasilia+DF';
const REVIEWS = {rating:'5,0', count:5, source:'Google'};
const RESPONSIBLE = 'Dra. Maria Luiza Gutmacher';
const CRO = 'CRO-DF 00000';
const SERVICES = [
  {short:'Clareamento',name:'Clareamento dental',desc:'Um sorriso mais luminoso com avaliação e orientação individual.',price:'',image:'assets/maria-clareamento.webp',alt:'Imagem de sorriso usada pela doutora para apresentar o clareamento dental'},
  {short:'Restaurações',name:'Restaurações estéticas',desc:'Cuidado com a forma e a naturalidade do sorriso em cada detalhe.',price:'',image:'assets/maria-estetica.webp',alt:'Detalhe de dentes em conteúdo da doutora sobre estética dental'},
  {short:'Profilaxia',name:'Profilaxia',desc:'Prevenção e limpeza profissional como parte do cuidado contínuo.',price:'',image:'assets/maria-profilaxia.png',alt:'Limpeza dental profissional com espelho e instrumentos odontológicos'},
  {short:'Avaliação',name:'Avaliação odontológica',desc:'Uma conversa para entender seu sorriso e planejar os próximos passos.',price:'',image:'assets/maria-consultorio.webp',alt:'Dra. Maria Luiza em seu ambiente de atendimento'}
];
const SCHEDULE = {
  mode:'preference', daysAhead:21,
  weekdays:[0,1,2,3,4,5,6],
  periods:['Manhã','Tarde','Noite','A combinar'],
  hoursText:'', open:'', close:'', slot:60, breaks:[], minNoticeHours:3, blocked:[]
};
const ART = [118,96,78,9];
const INTRO = {url:'Dra. Maria Luiza',enabled:true,oncePerSession:true};
