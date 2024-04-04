import Package from './Package';

const travelOffers = [
  {
    id: 1,
    planName: 'Basic',
    features: ['Guided Tours', 'Accommodation'],
  },
  {
    id: 2,
    planName: 'Value Pack',
    features: [
      'Guided Tours',
      'Accommodation',
      'Adventure Activities (Hiking, Rafting, etc.)',
      'Meals Included',
      'Transportation',
      'Trip Insurance',
    ],
  },
  {
    id: 3,
    planName: 'Premium',
    features: [
      'Guided Tours',
      'Accommodation',
      'Adventure Activities (Hiking, Rafting, etc.)',
      'Meals Included',
      'Transportation',
      'VIP Service',
      'Personal Guide',
      'Exclusive Excursions',
    ],
  },
];

const offers = travelOffers.map((offer) => (
  <Package key={offer.id} offer={offer} />
));

export default function TravelPackages() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">{offers}</div>
    </>
  );
}
