<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
// use Faker\Factory as faker;
use Faker\Generator as faker;
use App\Models\Customer;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $faker = Faker::create();
        // foreach (range(2, 21) as $index) {
        //     $customer_name = $faker->name();

        //     User::create([
        //         'name' => $customer_name,
        //         'email' => $faker->email(),
        //         'password' => bcrypt("default123"),
        //         'role' => 'customer',
        //         'is_admin' => 0
        //     ]);

        //     Customer::create([
        //         'user_id' => $index,
        //         'customer_name' => $customer_name,
        //         'addressline' => $faker->address(),
        //         'phone' => $faker->phoneNumber()
        //     ]);
        // }
    }
}
