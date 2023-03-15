export class CreateItemDto {
  readonly typeOfProduct: string;
  readonly classOfProduct: string;
  readonly title: string;
  readonly description: string;
  readonly amount: number;
  readonly amountType: string;
  readonly step: number;
  readonly price: number;
  readonly stepVariants?: string;
  readonly mainImg?: string;
  readonly images?: string;
}
