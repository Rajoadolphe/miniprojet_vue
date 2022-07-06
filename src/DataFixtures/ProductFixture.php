<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Product;

class ProductFixture extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $product = new Product();
        
        $product->setName('Priceless widget');
        $product->setPrix(14.50);
        $product->setTitre('Ok, I guess it *does* have a price');
        $product->setImage('');
        $manager->persist($product);

        $manager->flush();
    }
}
