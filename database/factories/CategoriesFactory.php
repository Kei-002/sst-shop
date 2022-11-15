<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use Faker\Factory as Faker;
use App\Models\Categories;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Categories>
 */
class CategoriesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Categories::class;

    public function definition()
    {
        // $faker = new Faker();
        return [
            'category_name' => $this->faker->unique()->randomElement(['CPU', 'GPU', 'Motherboard', 'RAM', 'PowerSupply', 'Fans', 'Case', 'Storage']),
        ];
    }
}
