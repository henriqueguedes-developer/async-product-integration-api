//export class CreateProductDto {}
// src/modules/products/dto/create-product.dto.ts
import { IsString, IsNumber, IsNotEmpty, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Product Name', description: 'The name of the product' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 99.99, description: 'The price of the product' })
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  price: number;
}

