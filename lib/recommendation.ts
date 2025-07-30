import { TravelDestination, travelDestinations } from './travelData';
import type { WizardData } from '@/contexts/WizardContext';

export function recommendTravel(wizardData: WizardData): (TravelDestination & { score: number })[] {
  if (!wizardData.interests || wizardData.interests.length === 0) {
    return [];
  }

  // 가격 필터링 로직
  const spendingHabit = wizardData.userProfile?.spendingHabit;
  let maxPrice = Infinity;
  if (spendingHabit === 'cost-effective') { // "가성비가 중요해요"
    maxPrice = 300000;
  } else if (spendingHabit === 'rational') { // "합리, 효율적이에요"
    maxPrice = 600000;
  } // "비싸도 좋으면 구매해요"는 maxPrice가 Infinity이므로 모든 가격대를 포함

  const filteredByPrice = travelDestinations.filter(d => d.price <= maxPrice);

  const recommendations = filteredByPrice.map(destination => {
    let score = 0;
    wizardData.interests?.forEach(interest => {
      if (destination.tags.includes(interest)) {
        score++;
      }
    });
    return { ...destination, score };
  });

  return recommendations
    .filter(d => d.score > 0)
    .sort((a, b) => b.score - a.score);
}
