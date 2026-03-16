import { Ticket } from "@/entities/Ticket/types/types";
import { FilterTicket } from "@features/ListTicket/types/types";

export function sortedTicket(
  tickets: Ticket[],
  activeButtonSorted: FilterTicket,
) {
  if (activeButtonSorted.cheap) {
    return [...tickets].sort((a, b) => a.price - b.price);
  }
  if (activeButtonSorted.fast) {
    return [...tickets].sort((a, b) => {
      const durationA = a.segments[0].duration + a.segments[1].duration;
      const durationB = b.segments[0].duration + b.segments[1].duration;
      return durationA - durationB;
    });
  }
  if (activeButtonSorted.optimal) {
    return [...tickets].sort((a, b) => {
      const durationA = a.segments[0].duration + a.segments[1].duration;
      const durationB = b.segments[0].duration + b.segments[1].duration;

      // Находим минимальные и максимальные значения для нормализации
      const prices = tickets.map((t) => t.price);
      const durations = tickets.map(
        (t) => t.segments[0].duration + t.segments[1].duration,
      );

      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      const minDuration = Math.min(...durations);
      const maxDuration = Math.max(...durations);

      // Избегаем деления на ноль
      const priceRange = maxPrice - minPrice || 1;
      const durationRange = maxDuration - minDuration || 1;

      // Нормализуем значения от 0 до 1
      const normalizedPriceA = (a.price - minPrice) / priceRange;
      const normalizedPriceB = (b.price - minPrice) / priceRange;

      const normalizedDurationA = (durationA - minDuration) / durationRange;
      const normalizedDurationB = (durationB - minDuration) / durationRange;

      // Весовые коэффициенты (можно настраивать)
      const priceWeight = 0.4; // 40% важности цены
      const durationWeight = 0.6; // 60% важности времени

      const optimalScoreA =
        normalizedPriceA * priceWeight + normalizedDurationA * durationWeight;
      const optimalScoreB =
        normalizedPriceB * priceWeight + normalizedDurationB * durationWeight;

      return optimalScoreA - optimalScoreB;
    });
  }

  return [...tickets];
}
