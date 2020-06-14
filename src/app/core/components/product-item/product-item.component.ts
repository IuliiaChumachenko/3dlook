import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent implements OnChanges {
  @Input() productItem;

  public defaultPicsIndexes = [0, 1, 2, 3, 4];
  public backgroundPic: string;

  ngOnChanges({productItem}: SimpleChanges) {
    if (productItem && productItem.currentValue) {
      this.defaultPicsIndexes = this.productItem.photos.length >= this.defaultPicsIndexes.length
                                ? this.defaultPicsIndexes
                                : this.defaultPicsIndexes.slice(0, this.productItem.photos.length);
      this.backgroundPic = this.productItem.photos[0];
    }
  }

  public carouselToLeft(isAvailable: boolean): void {
    if (isAvailable) {
      this.defaultPicsIndexes = this.defaultPicsIndexes.map(item => --item);
    }
  }

  public carouselToRight(isAvailable: boolean): void {
    if (isAvailable) {
      this.defaultPicsIndexes = this.defaultPicsIndexes.map(item => ++item);
    }
  }

  public selectPic(key): void {
    this.backgroundPic = this.productItem.photos[key];
  }

  public get isLeftArrowAvailable(): boolean {
    return this.productItem.photos.length > this.defaultPicsIndexes.length && this.defaultPicsIndexes[0] !== 0;
  }

  public get isRightArrowAvailable(): boolean {
    return this.productItem.photos.length > this.defaultPicsIndexes.length
      && this.defaultPicsIndexes[this.defaultPicsIndexes.length - 1] !== this.productItem.photos.length - 1;
  }
}
